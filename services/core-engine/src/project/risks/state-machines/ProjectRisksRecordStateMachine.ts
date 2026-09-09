export type ProjectRisksRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectRisksRecordStateMachine {
  private allowedTransitions: Record<ProjectRisksRecordState, ProjectRisksRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectRisksRecordState, to: ProjectRisksRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectRisksRecordState, to: ProjectRisksRecordState): ProjectRisksRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectRisksRecord: " + from + " -> " + to);
    }
    return to;
  }
}
