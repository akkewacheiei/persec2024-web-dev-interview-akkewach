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