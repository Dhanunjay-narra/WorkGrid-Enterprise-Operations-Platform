export type ProjectTasksTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectTasksTaskStateMachine {
  private allowedTransitions: Record<ProjectTasksTaskState, ProjectTasksTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectTasksTaskState, to: ProjectTasksTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectTasksTaskState, to: ProjectTasksTaskState): ProjectTasksTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectTasksTask: " + from + " -> " + to);
    }
    return to;
  }
}
