namespace :customer_setup do
  desc "Add customers for testing"
  task add_customers: :environment do
    10000.times do
      full_name = Faker::Name.unique.name
      Customer.create(
        first_name: full_name.split.first,
        last_name: full_name.split.last
      )
    end
  end
end
