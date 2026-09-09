export type ProjectSprintsRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectSprintsRecordStateMachine {
  private allowedTransitions: Record<ProjectSprintsRecordState, ProjectSprintsRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectSprintsRecordState, to: ProjectSprintsRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectSprintsRecordState, to: ProjectSprintsRecordState): ProjectSprintsRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectSprintsRecord: " + from + " -> " + to);
    }
    return to;
  }
}
