export type ProjectSprintsSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectSprintsSessionStateMachine {
  private allowedTransitions: Record<ProjectSprintsSessionState, ProjectSprintsSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectSprintsSessionState, to: ProjectSprintsSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectSprintsSessionState, to: ProjectSprintsSessionState): ProjectSprintsSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectSprintsSession: " + from + " -> " + to);
    }
    return to;
  }
}
