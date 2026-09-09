export type ProjectSprintsEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectSprintsEntryStateMachine {
  private allowedTransitions: Record<ProjectSprintsEntryState, ProjectSprintsEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectSprintsEntryState, to: ProjectSprintsEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectSprintsEntryState, to: ProjectSprintsEntryState): ProjectSprintsEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectSprintsEntry: " + from + " -> " + to);
    }
    return to;
  }
}
