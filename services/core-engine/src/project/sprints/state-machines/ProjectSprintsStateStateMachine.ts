export type ProjectSprintsStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectSprintsStateStateMachine {
  private allowedTransitions: Record<ProjectSprintsStateState, ProjectSprintsStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectSprintsStateState, to: ProjectSprintsStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectSprintsStateState, to: ProjectSprintsStateState): ProjectSprintsStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectSprintsState: " + from + " -> " + to);
    }
    return to;
  }
}
