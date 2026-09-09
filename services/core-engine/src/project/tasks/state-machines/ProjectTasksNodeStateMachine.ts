export type ProjectTasksNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectTasksNodeStateMachine {
  private allowedTransitions: Record<ProjectTasksNodeState, ProjectTasksNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectTasksNodeState, to: ProjectTasksNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectTasksNodeState, to: ProjectTasksNodeState): ProjectTasksNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectTasksNode: " + from + " -> " + to);
    }
    return to;
  }
}
