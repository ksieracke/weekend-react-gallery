CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/surprised.jpg', 'Surprised Face Laura!', 'Photo of Laura looking surprised.'),
('images/diaperHead.jpg', 'Diaper Head Laura!', 'Photo of Laura wearing a diaper on her head.'),
('images/sadGirl.jpg', 'Sad Girl Laura!', 'Photo of a Laura looking sad.'),
('images/rage.jpg', 'Rageful Laura!', 'Photo of a Laura looking rageful.'),
('images/tongueOut.jpg', 'Tongue Out Laura!', 'Photo of a Laura sticking her tongue out.'),
('images/poutyLip.jpg', 'Pouty Lip Laura!', 'Photo of a Laura looking pouty.'),
('images/sidewaysHat.jpg', 'Sideways Hat Laura!', 'Photo of a Laura wearing a hat sideways.'),
('images/nosePick.jpg', 'Nose Picking Laura!', 'Photo of a Laura picking her nose.'),
('images/boogerBubble.jpg', 'Booger Bubble Laura!', 'Photo of a Laura with a snot bubble.'),
('images/fashionista.jpg', 'Fashionista Laura!', 'Photo of a Laura in a pink cowgirl hat and sunglasses.');