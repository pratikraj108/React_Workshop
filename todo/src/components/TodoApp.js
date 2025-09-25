import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  Stack,
} from "@mui/material";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // track editing index
  const [editValue, setEditValue] = useState(""); // track editing value

  // Load from localStorage on mount
  useEffect(() => {
    const savedInProgress = localStorage.getItem("inProgress");
    const savedCompleted = localStorage.getItem("completed");

    if (savedInProgress) setInProgress(savedInProgress.split(","));
    if (savedCompleted) setCompleted(savedCompleted.split(","));
  }, []);

  // Save to localStorage whenever tasks update
  useEffect(() => {
    localStorage.setItem("inProgress", inProgress.join(","));
    localStorage.setItem("completed", completed.join(","));
  }, [inProgress, completed]);

  const handleAdd = () => {
    if (task.trim() !== "") {
      setInProgress([...inProgress, task]);
      setTask("");
    }
  };

  const handleComplete = (index) => {
    const newInProgress = [...inProgress];
    const completedTask = newInProgress.splice(index, 1)[0];
    setInProgress(newInProgress);
    setCompleted([...completed, completedTask]);
  };

  const handleEditStart = (index) => {
    setEditIndex(index);
    setEditValue(inProgress[index]);
  };

  const handleEditSave = (index) => {
    const updatedTasks = [...inProgress];
    updatedTasks[index] = editValue;
    setInProgress(updatedTasks);
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <Box sx={{ p: 4 }}>
      {/* Main Heading */}
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          mb: 4,
          color: "#1976d2",
          textTransform: "uppercase",
          letterSpacing: 2,
        }}
      >
        To-Do App
      </Typography>

      {/* Cards container */}
      <Box
        sx={{
          display: "flex",
          gap: 4,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Input Card */}
        <Card
          sx={{
            flex: 1,
            minWidth: 300,
            maxWidth: 400,
            bgcolor: "#f5f5f5",
            boxShadow: 6,
            borderRadius: 3,
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}
            >
              Add Task
            </Typography>
            <Stack direction="row" spacing={2   }>
              <TextField
                label="Enter task"
                variant="filled"
                fullWidth
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              <Button variant="contained" color="primary" onClick={handleAdd}>
                Add
              </Button>
            </Stack>
          </CardContent>
        </Card>

        {/* In Progress Card */}
        <Card
          sx={{
            flex: 1,
            minWidth: 300,
            maxWidth: 400,
            bgcolor: "#e3f2fd",
            boxShadow: 6,
            borderRadius: 3,
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}
            >
              In Progress
            </Typography>
            {inProgress.length === 0 || inProgress[0] === "" ? (
              <Typography color="text.secondary">No tasks yet...</Typography>
            ) : (
              inProgress.map((t, i) => (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    bgcolor: "white",
                    borderRadius: 2,
                    p: 1.5,
                    mb: 1,
                    boxShadow: 2,
                  }}
                >
                  {editIndex === i ? (
                    <Stack direction="row" spacing={1} sx={{ flexGrow: 1 }}>
                      <TextField
                        size="small"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        fullWidth
                      />
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => handleEditSave(i)}
                      >
                        Save
                      </Button>
                    </Stack>
                  ) : (
                    <>
                      <Typography>{t}</Typography>
                      <Stack direction="row" spacing={1}>
                        <Button
                          variant="outlined"
                          color="secondary"
                          size="small"
                          onClick={() => handleEditStart(i)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="contained"
                          color="success"
                          size="small"
                          onClick={() => handleComplete(i)}
                        >
                          Complete
                        </Button>
                      </Stack>
                    </>
                  )}
                </Box>
              ))
            )}
          </CardContent>
        </Card>

        {/* Completed Card */}
        <Card
          sx={{
            flex: 1,
            minWidth: 300,
            maxWidth: 400,
            bgcolor: "#e8f5e9",
            boxShadow: 6,
            borderRadius: 3,
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}
            >
              Completed
            </Typography>
            {completed.length === 0 || completed[0] === "" ? (
              <Typography color="text.secondary">
                No completed tasks...
              </Typography>
            ) : (
              completed.map((t, i) => (
                <Box
                  key={i}
                  sx={{
                    bgcolor: "white",
                    borderRadius: 2,
                    p: 1.5,
                    mb: 1,
                    boxShadow: 2,
                  }}
                >
                  <Typography sx={{ textDecoration: "line-through" }}>
                    {t}
                  </Typography>
                </Box>
              ))
            )}
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default TodoApp;
