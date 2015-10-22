# BrowserQB
A Browser Based Game Where The User Plays As A Quarterback!

Rough Idea of my current thought process. Subject to change. 

User arrives at the home screen and checks out the how to play section. After detailed analysis of how to play they click to go to the game. At the primary screen they are provided a few pass plays to choose from. 
The plays revolve around the WR routes. For example Smash and Slant-Out. The user isn’t sure what the fuck each play incorporates so they return to the how to play screen.
Here a detailed description of what route/play does and how to respond to defensive reads when you have the certain play. 
Upon feeling comfortable the user returns to the primary play selection screen and selects a slant-out route. The user is then brought to the pre-snap screen. 
Here the user has 30 seconds to read the defense BEFORE THE SNAP. They’ve read how to read the defense PRESNAP in the how to section so they know whats up. 
They notice there are two safeties and the cornerbacks are playing 5-10 yards off the WRs so they assume its a zone defense.
Given that assumption they us a drop box to select their reads make the first read in their progression the WR whose route is most likely going to defeat a zone defense. 
The user passes to the proper WR for an 8 yard gain. The user is then returned to the play selection screen and they RINSE AND REPEAT.

Pre-Snap Reads
Defensive Scheme:

- 4-3

Defensive Plays:

- Cover 2
- All Out Blitz
- Man to Man
- Mixed man with safety in zone in the middle of the field

Question:
     Is the best way to organize this data to create objects for specific defensive reads with each play?
     This is going to be really difficult. I can do this. Holy fuck me in the knuckles.

Pass Plays
Smash:

Routes:

- Hitch
- Outside-Post
- Cross
- Inside Post

vs Cover 2:

First Read:

- Look at the safeties
    - 2 safeties high

Hitch:

- If cornerback is playing back then the hitch route will be open

Outside-Post:

- If the cornerback is playing up and covering the hitch route then the outside post is open

Cross:

- If the MLB or LOLB are in coverage odds of completing the cross route are low
    - Shit understanding of the cross route here

Inside-Post:

- This route is just fucked in Cover 2

vs All Out Blitz:
Hitch:

Outside-Post:

Cross:

Inside-Post:

vs Man
Hitch:

Outside-Post:

Cross:

Inside-Post:

vs Cover 3
Hitch:

Outside-Post:

Cross:

Inside-Post:

Four Verticals:

Routes:

- Go
- Go
- Go
- Go

vs Cover 2:
Go:

- If safety moves left odds are lowered
- If safety stays mid odds are increased


Go:

- If safety stays mid odds are lowered
- If safety moves left or right odds are increased

Go:

- If safety stays mid odds are lowered
- If safety moves left or right odds are increased

Go:

- If safety moves right odds are lowered
- If safety stays mid odds are increased

vs All Out Blitz:
Go:
Go:
Go:
Go:

vs Man
Go:
Go:
Go:
Go:

vs Cover 3
Go:
Go:
Go:
Go:

Bobs Your Uncle:

*The TE does not run a route on this play

Routes:

- Post
- Delayed To The Flat
- Texas
- Go

vs Cover 2:
Post:

- If safety stays mid odds are lowered
- If linebackers go into coverage odds are lowered

Delayed HB Flat:

- If thrown to shortly after the snap the pass is incomplete
- If CB stays in the flat zone then odds of ball being batted down/intercepted increase
- Very short gain if anything

Texas:

- If Safety moves right odds are lowered
- Otherwise this route is pretty solid in cover 2

Go:

vs All Out Blitz:
Post:

Delayed HB Flat:

Texas:

Go:

vs Man
Post:

Delayed HB Flat:

Texas:

Go:

vs Cover 3
Post:

Delayed HB Flat:

Texas:

Go:

Need:

- Number of reads the Quarterback can make per play
    - Fluctuates
    - Max = 5

Stretch Potential:

- Add mixed coverage
- Make there be a sweet spot where the QB just sets his feet after the drop. If you throw it at that moment then your odds of a completion are incredibly high
- Include the users QBR at the end of a game
- Audibles
- Step up into the pocket

To Do:
Go over each WR route in each play and do a writeup of how each route will be effected by each different defensive play

How to go about the build.

- First do the logic for ONE play with ONLY Cover 2. Then add another play with ONLY Cover 2.
- Add another defensive play for each play until you’ve added all the plays
- Adjust the odds so the game doesn’t fucking suck

Organization:
