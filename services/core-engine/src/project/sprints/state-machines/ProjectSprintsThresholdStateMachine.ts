export type ProjectSprintsThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectSprintsThresholdStateMachine {
  private allowedTransitions: Record<ProjectSprintsThresholdState, ProjectSprintsThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectSprintsThresholdState, to: ProjectSprintsThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectSprintsThresholdState, to: ProjectSprintsThresholdState): ProjectSprintsThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectSprintsThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
