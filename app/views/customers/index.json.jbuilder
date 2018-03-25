json.query @query
json.customers do
  json.array! @customers, partial: 'customers/customer', as: :customer
end
