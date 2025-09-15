import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

export default function WorkLog() {
  const [tasks, setTasks] = useState([
    {
      date: "2025-09-15",
      module: "Landing Page Slider",
      description: "Implement autoplay pause on hover; fix transition jitter",
      ticket: "FE-142",
      start: "10:00",
      end: "11:45",
      duration: 1.75,
      status: "Done",
      link: "github.com/org/repo/pull/123",
      notes: "Needed CSS transform tweak; tested on Chrome & Firefox",
    },
    {
      date: "2025-09-15",
      module: "Dashboard — Project Cards",
      description: "Add 'See Details' modal and responsive grid (3 per row)",
      ticket: "FE-150",
      start: "12:30",
      end: "15:00",
      duration: 2.5,
      status: "In Progress",
      link: "github.com/org/repo/commit/abc123",
      notes: "Waiting for design assets (wireframe v2)",
    },
    {
      date: "2025-09-16",
      module: "Accessibility Improvements",
      description: "Add aria-labels and keyboard navigation for slider",
      ticket: "FE-160",
      start: "09:30",
      end: "10:30",
      duration: 1.0,
      status: "Done",
      link: "github.com/org/repo/pull/124",
      notes: "All lighthouse checks passing",
    },
  ]);

  return (
    <div className="p-6 grid gap-4">
      <h1 className="text-2xl font-bold mb-4">Frontend Developer Work Log</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task, index) => (
          <Card key={index} className="shadow-md rounded-2xl">
            <CardContent className="p-4 space-y-2">
              <p><span className="font-semibold">Date:</span> {task.date}</p>
              <p><span className="font-semibold">Module:</span> {task.module}</p>
              <p><span className="font-semibold">Description:</span> {task.description}</p>
              <p><span className="font-semibold">Ticket:</span> {task.ticket}</p>
              <p><span className="font-semibold">Time:</span> {task.start} - {task.end} ({task.duration} hrs)</p>
              <p><span className="font-semibold">Status:</span> {task.status}</p>
              <p>
                <span className="font-semibold">PR/Commit:</span>{" "}
                <a
                  href={`https://${task.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {task.link}
                </a>
              </p>
              <p><span className="font-semibold">Notes:</span> {task.notes}</p>
              <Button variant="outline" size="sm" className="mt-2 w-full">
                Mark as Reviewed
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}