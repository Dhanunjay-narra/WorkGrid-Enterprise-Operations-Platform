export type ProjectCapacityProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectCapacityProfileStateMachine {
  private allowedTransitions: Record<ProjectCapacityProfileState, ProjectCapacityProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectCapacityProfileState, to: ProjectCapacityProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectCapacityProfileState, to: ProjectCapacityProfileState): ProjectCapacityProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectCapacityProfile: " + from + " -> " + to);
    }
    return to;
  }
}
