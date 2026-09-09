export type WorkflowEdgesRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowEdgesRecordStateMachine {
  private allowedTransitions: Record<WorkflowEdgesRecordState, WorkflowEdgesRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowEdgesRecordState, to: WorkflowEdgesRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowEdgesRecordState, to: WorkflowEdgesRecordState): WorkflowEdgesRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowEdgesRecord: " + from + " -> " + to);
    }
    return to;
  }
}
