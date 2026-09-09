export type ProjectTasksAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectTasksAssignmentStateMachine {
  private allowedTransitions: Record<ProjectTasksAssignmentState, ProjectTasksAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectTasksAssignmentState, to: ProjectTasksAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectTasksAssignmentState, to: ProjectTasksAssignmentState): ProjectTasksAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectTasksAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
