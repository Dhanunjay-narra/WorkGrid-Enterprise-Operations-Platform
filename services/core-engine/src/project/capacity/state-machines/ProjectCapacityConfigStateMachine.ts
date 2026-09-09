export type ProjectCapacityConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectCapacityConfigStateMachine {
  private allowedTransitions: Record<ProjectCapacityConfigState, ProjectCapacityConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectCapacityConfigState, to: ProjectCapacityConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectCapacityConfigState, to: ProjectCapacityConfigState): ProjectCapacityConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectCapacityConfig: " + from + " -> " + to);
    }
    return to;
  }
}
