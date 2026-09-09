export type ProjectEpicsRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectEpicsRecordStateMachine {
  private allowedTransitions: Record<ProjectEpicsRecordState, ProjectEpicsRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectEpicsRecordState, to: ProjectEpicsRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectEpicsRecordState, to: ProjectEpicsRecordState): ProjectEpicsRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectEpicsRecord: " + from + " -> " + to);
    }
    return to;
  }
}
