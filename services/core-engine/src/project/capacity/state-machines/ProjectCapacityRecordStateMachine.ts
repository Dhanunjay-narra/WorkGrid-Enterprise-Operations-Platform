export type ProjectCapacityRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectCapacityRecordStateMachine {
  private allowedTransitions: Record<ProjectCapacityRecordState, ProjectCapacityRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectCapacityRecordState, to: ProjectCapacityRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectCapacityRecordState, to: ProjectCapacityRecordState): ProjectCapacityRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectCapacityRecord: " + from + " -> " + to);
    }
    return to;
  }
}
