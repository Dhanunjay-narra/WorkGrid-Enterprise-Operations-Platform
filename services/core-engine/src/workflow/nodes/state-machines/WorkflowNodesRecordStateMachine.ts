export type WorkflowNodesRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowNodesRecordStateMachine {
  private allowedTransitions: Record<WorkflowNodesRecordState, WorkflowNodesRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowNodesRecordState, to: WorkflowNodesRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowNodesRecordState, to: WorkflowNodesRecordState): WorkflowNodesRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowNodesRecord: " + from + " -> " + to);
    }
    return to;
  }
}
