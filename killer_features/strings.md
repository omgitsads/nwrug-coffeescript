<!SLIDE>

# String Interpolation

<!SLIDE>

    @@@javascript
    speed  = "Quick";
    colour = "Brown";
    animal = "Fox";

    "The" + speed + colour + animal;

    // "The Quick Brown Fox"

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

    @@@javascript
    html  = "<html>";
    html += "<head><title>Hello</title></head>";
    html += "<body>";
    html += "<h1>Hello, World</h1>";
    html += "</body>";
    html += "</html>";

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
    pattern = /// ^ (
      ?: [-=]>
      | [-+*/%<>&|^!?=]=
      | >>>=?
      | ([-+:])\1
      | ([&|<>])\2=?
      | \?\.
      | \.{2,3}
    ) /// 

<!SLIDE>

# Comments

<!SLIDE>

    @@@ruby
    ###
    CoffeeScript Compiler v1.1.1
    Released under the MIT License
    ###
