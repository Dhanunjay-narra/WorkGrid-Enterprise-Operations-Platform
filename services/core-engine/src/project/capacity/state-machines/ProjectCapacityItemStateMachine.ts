export type ProjectCapacityItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectCapacityItemStateMachine {
  private allowedTransitions: Record<ProjectCapacityItemState, ProjectCapacityItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectCapacityItemState, to: ProjectCapacityItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectCapacityItemState, to: ProjectCapacityItemState): ProjectCapacityItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectCapacityItem: " + from + " -> " + to);
    }
    return to;
  }
}
