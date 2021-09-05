Feature: BDD Atlas Homepage Colour Quote

    I want to able to submit quote in various Colour

    @TC001 @BlueColor
    Scenario: I want to be able to submit a Blue Quote
        Given I open BDD Atlas Web
        When I type a quote : coba coba text
        And I choose the Blue Colour
        Then I verify quote submitted "Blue" and "coba coba"
        Then I verify quote has been deleted : coba

    @TC002 @AllColor
    Scenario Outline: I want to be able to submit a <Colour> Quote
        Given I open BDD Atlas Web
        When I type a quote : coba coba text
        And I choose the <Colour> Colour
        Then I verify quote submitted "<Colour>" and "coba coba"
        Then I verify quote has been deleted : coba

        Examples:
            | Colour  |
            | White   |
            | Yellow  |
            | Cyan    |
            | Magenta |