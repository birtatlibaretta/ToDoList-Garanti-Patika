<!DOCTYPE html>
<html>
<head>
  <title>To-Do List</title>
</head>
<body>
  <h1>To-Do List</h1>
  <input type="text" id="task" placeholder="Yeni görev ekle">
  <button onclick="addTask()">Ekle</button>
  <ul id="taskList"></ul>

  <script>
    // Sayfa yüklendiğinde mevcut görevleri yükle
    window.onload = function() {
      loadTasks();
    };

    // Görev ekleme işlemi
    function addTask() {
      var taskInput = document.getElementById("task");
      var task = taskInput.value;

      if (task !== "") {
        var taskList = document.getElementById("taskList");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(task));
        taskList.appendChild(li);

        saveTask(task);

        taskInput.value = "";
      }
    }

    // Görevi Local Storage'a kaydet
    function saveTask(task) {
      var tasks = getTasksFromStorage();
      tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Local Storage'dan görevleri al
    function getTasksFromStorage() {
      var tasks = localStorage.getItem("tasks");
      if (tasks === null) {
        return [];
      }
      return JSON.parse(tasks);
    }

    // Mevcut görevleri yükle
    function loadTasks() {
      var tasks = getTasksFromStorage();
      var taskList = document.getElementById("taskList");

      tasks.forEach(function(task) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(task));
        taskList.appendChild(li);
      });
    }
  </script>
</body>
</html>
