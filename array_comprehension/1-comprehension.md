<!SLIDE>

# Array Comprehensions

<!SLIDE small>

    @@@ruby
    eat food for food in ['toast', 'cheese', 'wine']

    countdown = (num for num in [10..1])

    yearsOld = max: 10, ida: 9, tim: 11

    ages = for child, age of yearsOld
      child + " is " + age

