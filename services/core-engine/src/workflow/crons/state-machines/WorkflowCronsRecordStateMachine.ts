export type WorkflowCronsRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowCronsRecordStateMachine {
  private allowedTransitions: Record<WorkflowCronsRecordState, WorkflowCronsRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowCronsRecordState, to: WorkflowCronsRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowCronsRecordState, to: WorkflowCronsRecordState): WorkflowCronsRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowCronsRecord: " + from + " -> " + to);
    }
    return to;
  }
}
