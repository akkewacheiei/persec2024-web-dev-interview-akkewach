select
    top5_2016.product_name,
    total_quantity_2016,
    total_quantity_2017
from
    (
        SELECT
            product_name,
            SUM(quantity) as total_quantity_2016
        FROM
            order_details
            join orders on orders.order_id = order_details.order_id
            JOIN products ON products.product_id = order_details.product_id
        WHERE
            orders.order_date BETWEEN '2016-01-01' AND '2016-12-31'
        GROUP BY
            order_details.product_id
        order by
            total_quantity_2016 desc
        Limit
            5
    ) as top5_2016
    JOIN (
        SELECT
            product_name,
            SUM(quantity) as total_quantity_2017
        FROM
            order_details
            join orders on orders.order_id = order_details.order_id
            JOIN products ON products.product_id = order_details.product_id
        WHERE
            orders.order_date BETWEEN '2017-01-01' AND '2017-12-31'
        GROUP BY
            order_details.product_id
        order by
            total_quantity_2017 desc
        Limit
            5
    ) as top5_2017 ON top5_2016.product_name = top5_2017.product_name;