<?php
try {
    // Establish a connection to the SQLite database 
    $pdo = new PDO('sqlite:drinkdb.sql');

    // Set the PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Example: Select all drinks from the 'drinks' table
    $query = "SELECT * FROM drinks";
    $stmt = $pdo->query($query);

    // Fetch and display the results
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo "Name: " . $row['name'] . "<br>";
        echo "Category: " . $row['category'] . "<br>";
        echo "Price: $" . number_format($row['price'], 2) . "<br>";
        echo "Description: " . $row['description'] . "<br><br>";
    }

    // Close the database connection
    $pdo = null;
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>
