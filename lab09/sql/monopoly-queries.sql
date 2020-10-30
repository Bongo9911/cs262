--8.1.a
--SELECT * FROM Game ORDER BY Time DESC

--8.1.b
-- SELECT *
-- FROM Game
-- WHERE (time >= DATE_TRUNC('week', CURRENT_TIMESTAMP - interval '1 week'));

--8.1.c
-- SELECT *
-- FROM Player
-- WHERE name IS NOT NULL;

--8.1.d
-- SELECT playerid
-- FROM PlayerGame
-- WHERE score > 2000;

--8.1.e
-- SELECT *
-- FROM Player
-- WHERE emailAddress LIKE '%gmail%';

--8.2.a
-- SELECT score
-- FROM PlayerGame, Player 
-- WHERE player.id = playerid
-- AND name = 'The King'
-- ORDER BY score DESC;

--8.2.b
-- SELECT name 
-- FROM PlayerGame, Game, Player 
-- WHERE game.id = gameid
-- AND player.id = playerid
-- AND time = '2006-06-28 13:20:00 +0000' 
-- ORDER BY PlayerGame.score DESC 
-- LIMIT 1;

--8.2.c
--The P1.ID < P2.ID clause ensures that P1 and P2 are different records.

--8.2.d
--If an Employee in a table has a reference to another person (ex: their boss) you could join the table to 
--itself to show their boss's information next to their information.