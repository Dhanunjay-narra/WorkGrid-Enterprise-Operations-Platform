export type ProjectTasksItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectTasksItemStateMachine {
  private allowedTransitions: Record<ProjectTasksItemState, ProjectTasksItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectTasksItemState, to: ProjectTasksItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectTasksItemState, to: ProjectTasksItemState): ProjectTasksItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectTasksItem: " + from + " -> " + to);
    }
    return to;
  }
}
