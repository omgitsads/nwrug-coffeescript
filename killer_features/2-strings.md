<!SLIDE>

# String Interpolation

<!SLIDE>

    @@@ruby
    speed  = "Quick"
    colour = "Brown"
    animal = "Fox"

    "The #{speed} #{colour} #{animal}"

    # => "The Quick Brown Fox"

<!SLIDE>

# Regex's too!

<!SLIDE>

    @@@ruby
    sep   = "[.\\/\\- ]"
    dates = /\d+#{sep}\d+#{sep}\d+/

<!SLIDE>

# HEREDOCs

<!SLIDE>

    @@@ruby
    html = '''
      <html>
        <head><title>Hello</title></head>
        <body>
          <h1>Hello, World</h1>
        </body>
      </html>
    '''

<!SLIDE bullets incremental>

# String Interpolation works too!

* Just use double quoted heredocs

<!SLIDE>

    @@@ruby
    name = "NWRUG"
    html = """
      <html>
        <head><title>Hello</title></head>
        <body>
          <h1>Hello, #{name}</h1>
        </body>
      </html>
    """

<!SLIDE>

# Multi-line Regex's!

<!SLIDE>

    @@@ruby
    OPERATOR = /// ^ (
      ?: [-=]>             # function
       | [-+*/%<>&|^!?=]=  # compound assign / compare
       | >>>=?             # zero-fill right shift
       | ([-+:])\1         # doubles
       | ([&|<>])\2=?      # logic / shift
       | \?\.              # soak access
       | \.{2,3}           # range or splat
    ) ///
