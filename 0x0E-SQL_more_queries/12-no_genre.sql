-- a scipt that imports a database dump
SELECT a.title, b.genre_id
FROM tv_shows a
LEFT JOIN tv_show_genres b
ON a.id = b.show_id
WHERE b.genre_id IS NULL
ORDER BY a.title ASC, b.genre_id ASC;
