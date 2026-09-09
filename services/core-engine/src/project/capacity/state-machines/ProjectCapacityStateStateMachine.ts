export type ProjectCapacityStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectCapacityStateStateMachine {
  private allowedTransitions: Record<ProjectCapacityStateState, ProjectCapacityStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectCapacityStateState, to: ProjectCapacityStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectCapacityStateState, to: ProjectCapacityStateState): ProjectCapacityStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectCapacityState: " + from + " -> " + to);
    }
    return to;
  }
}
