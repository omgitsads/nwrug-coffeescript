languages = ['Ruby', 
  'JavaScript', 
  'Objective-C', 
  'Java']

announce = (fav, like..., nolike) ->
  console.log "I Love #{fav}"
  console.log "I Like #{like}"
  console.log "I'm not very fond of #{nolike}"

announce languages...
# I Love Ruby
# I Like JavaScript,Objective-C
# I'm not very fond of Java
