# Ex.08 Design of Interactive Image Gallery
# Date:06.05.2025
# AIM:
To design a web application for an inteactive image gallery with minimum five images.

# DESIGN STEPS:
## Step 1:
Clone the github repository and create Django admin interface.

## Step 2:
Change settings.py file to allow request from all hosts.

## Step 3:
Use CSS for positioning and styling.

## Step 4:
Write JavaScript program for implementing interactivity.

## Step 5:
Validate the HTML and CSS code.

## Step 6:
Publish the website in the given URL.

# PROGRAM :
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CAR SHOWROOM</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Satisfy&family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #f9f9f9;
            color: #333;
        }

        h1 {
            font-family: 'Satisfy', cursive;
            font-size: 3em;
            margin: 20px;
            color: #ff6347;
            text-align: center;
        }

        h2 {
            font-family: 'Satisfy', cursive;
            color: #ff6347;
            font-size: 1.5em;
            margin-top: -10px;
        }

        .gallery {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            max-width: 1200px;
            padding: 10px;
            justify-content: center;
        }

        .gallery-item {
            text-align: center;
            width: 200px;
            margin: 10px;
            border: 2px solid #ddd;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            transition: transform 0.3s;
        }

     
        .gallery-item img {
            width: 200px;
            height: 200px;
            object-fit: cover;
            border-bottom: 1px solid #ddd;
        }

        .gallery-item p {
            font-family: 'Satisfy', cursive;
            font-size: 1.3em;
            color: #555;
            padding: 10px 0;
            margin: 0;
        }

        .gallery-item:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
    </style>
</head>
<body>
    <h1>Image Gallery By Dharun Arulselvan(212224220024)</h1>
   
    
    <div class="gallery">
        <div class="gallery-item">
            <img src="idk.png" alt="Image 1">
            <p>NISSAN</p>
        </div>
        <div class="gallery-item">
            <img src="aston.png" alt="Image 2">
            <p>ASTON MARTIN</p>
        </div>
        <div class="gallery-item">
            <img src="jeep.png" alt="Image 3">
            <p>JEEP</p>
        </div>
        <div class="gallery-item">
            <img src="dodge.png" alt="Image 4">
            <p>DODGE GT</p>
        </div>
        <div class="gallery-item">
            <img src="audi.png" alt="Image 5">
            <p>AUDI</p>
        </div>
        <div class="gallery-item">
            <img src="rr.png" alt="Image 6">
            <p>ROLLS ROYCE</p>
        </div>
        <div class="gallery-item">
            <img src="ferr2.png" alt="Image 7">
            <p>FERRARI</p>
        </div>
        <div class="gallery-item">
            <img src="benz.png" alt="Image 8">
            <p>MERCEDES BENZ</p>
        </div>
        <div class="gallery-item">
            <img src="bmw.png" alt="Image 9">
            <p>BMW</p>
        </div>
        <div class="gallery-item">
            <img src="ferrar.png" alt="Image 10">
            <p>FERRARI GT TURBO</p>
        </div>
        <div class="gallery-item">
            <img src="porsche.png" alt="Image 11">
            <p>PORSCHE</p>
        </div>
        <div class="gallery-item">
            <img src="lambo.png" alt="Image 12">
            <p>LAMBORGHINI</p>
        </div>
    </div>
    <script>
    const gallery = document.querySelector('.gallery');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const modalClose = document.getElementById('modalClose');

    gallery.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            modalImage.src = e.target.src;
            modal.style.display = 'flex';
        }
    });

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

</script> 
</body>
</html>

style.css(for more clarity)
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  color: #333;
}

h1 {
  font-family: 'Satisfy', cursive;
  font-size: 3em;
  margin: 20px;
  color: #ff6347;
  text-align: center;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  max-width: 1200px;
  padding: 10px;
  justify-content: center;
}

.gallery-item {
  text-align: center;
  width: 200px;
  margin: 10px;
  border: 2px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s;
}

.gallery-item img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}

.gallery-item:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.gallery-item p {
  font-family: 'Satisfy', cursive;
  font-size: 1.3em;
  color: #555;
  padding: 10px 0;
  margin: 0;
}

/* Modal Styles */
#modal {
  display: none;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
}

#modal img {
  max-width: 90%;
  max-height: 80%;
  border: 5px solid white;
  border-radius: 10px;
}

#modalClose {
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 40px;
  color: white;
  cursor: pointer;
}

```
# OUTPUT:
![alt text](SC1.png)
![alt text](SC2.png)
![alt text](SC3.png)
# RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
