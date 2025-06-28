function insertRandom(addTask, addProject)
{
    // --- Sample Projects ---
addProject("Default Project");
addProject("Work");
addProject("Personal");
addProject("Health");
addProject("Travel");
addProject("Home Renovation");

// --- Tasks for Default Project ---
addTask("Default Project", "Buy groceries", "2023-10-15");
addTask("Default Project", "Sell groceries", "2023-10-15");
addTask("Default Project", "Renew car insurance", "2024-11-10");
addTask("Default Project", "Backup important files", "2024-12-01");

// --- Tasks for Work ---
addTask("Work", "Finish report", "2023-10-20");
addTask("Work", "Prepare presentation", "2024-10-30");
addTask("Work", "Team meeting", "2024-09-22");
addTask("Work", "Update resume", "2024-08-15");
addTask("Work", "Send client feedback", "2024-07-10");

// --- Tasks for Personal ---
addTask("Personal", "Call mom", "2023-10-18");
addTask("Personal", "Buy birthday gift for sister", "2024-07-19");
addTask("Personal", "Meditate for 10 minutes", "2024-06-30");
addTask("Personal", "Finish reading book", "2024-08-10");
addTask("Personal", "Clean the room", "2024-06-28");

// --- Tasks for Health ---
addTask("Health", "Schedule annual checkup", "2024-09-05");
addTask("Health", "Go for a run", "2024-06-27");
addTask("Health", "Buy vitamins", "2024-06-28");
addTask("Health", "Drink 2L water", "2024-06-26");
addTask("Health", "Do stretching exercises", "2024-06-29");

// --- Tasks for Travel ---
addTask("Travel", "Book flight to Goa", "2024-12-20");
addTask("Travel", "Renew passport", "2024-07-01");
addTask("Travel", "Plan itinerary", "2024-12-05");
addTask("Travel", "Buy travel insurance", "2024-11-25");

// --- Tasks for Home Renovation ---
addTask("Home Renovation", "Call electrician", "2024-07-02");
addTask("Home Renovation", "Buy paint samples", "2024-07-05");
addTask("Home Renovation", "Fix leaking tap", "2024-07-03");
addTask("Home Renovation", "Research flooring options", "2024-07-10");

}
export default insertRandom;