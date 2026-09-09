export type ProjectSprintsEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectSprintsEventStateMachine {
  private allowedTransitions: Record<ProjectSprintsEventState, ProjectSprintsEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectSprintsEventState, to: ProjectSprintsEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectSprintsEventState, to: ProjectSprintsEventState): ProjectSprintsEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectSprintsEvent: " + from + " -> " + to);
    }
    return to;
  }
}
