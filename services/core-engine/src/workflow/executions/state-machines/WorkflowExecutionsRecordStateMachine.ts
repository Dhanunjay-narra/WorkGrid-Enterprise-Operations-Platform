export type WorkflowExecutionsRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowExecutionsRecordStateMachine {
  private allowedTransitions: Record<WorkflowExecutionsRecordState, WorkflowExecutionsRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowExecutionsRecordState, to: WorkflowExecutionsRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowExecutionsRecordState, to: WorkflowExecutionsRecordState): WorkflowExecutionsRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowExecutionsRecord: " + from + " -> " + to);
    }
    return to;
  }
}
