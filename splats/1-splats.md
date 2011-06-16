<!SLIDE>

# Splats

<!SLIDE>

    @@@ruby
    languages = ['Ruby', 
      'JavaScript', 
      'Objective-C', 
      'Java']

    announce = (fav, like..., nolike) ->
      alert "I Love #{fav}"
      alert "I Like #{like}"
      alert "I'm not very fond of #{nolike}"

    announce languages...
    # I Love Ruby
    # I Like JavaScript,Objective-C
    # I'm not very fond of Java
