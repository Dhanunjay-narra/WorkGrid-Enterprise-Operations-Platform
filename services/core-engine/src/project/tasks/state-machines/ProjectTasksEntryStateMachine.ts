export type ProjectTasksEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectTasksEntryStateMachine {
  private allowedTransitions: Record<ProjectTasksEntryState, ProjectTasksEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectTasksEntryState, to: ProjectTasksEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectTasksEntryState, to: ProjectTasksEntryState): ProjectTasksEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectTasksEntry: " + from + " -> " + to);
    }
    return to;
  }
}
