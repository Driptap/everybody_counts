#EVERYBODY COUNTS!
###### Because everybody has to count
I hate money, but it's a nessasary evil. Planning money is my most hated thing in the world to do. 

So this little script should make it abit easier. It takes in a CSV from your bank, and spits out a CSV with some extra columns that categorise the incomings and outgoings.

It's a Middleman static site. Ensure you have Ruby > version 1.9 installed.

To make it run, in the terminal paste:

```
git clone https://github.com/Driptap/everybody_counts.git && cd everybody_counts && bundle install && middleman

```
Then visit localhost:4567 in you browser and upload a CSV from your bank. It will download another CSV to your desktop that you can open in Excelor some other equally boring piece of software.

It has some exisiting configurations already but you will need to tweak it to suit your spending style, open everybody_counts/source/javascripts/all.js and the comments will tell you what to do.
