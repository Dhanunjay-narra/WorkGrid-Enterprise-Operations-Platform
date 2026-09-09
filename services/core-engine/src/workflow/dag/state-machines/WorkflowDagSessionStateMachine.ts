export type WorkflowDagSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowDagSessionStateMachine {
  private allowedTransitions: Record<WorkflowDagSessionState, WorkflowDagSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowDagSessionState, to: WorkflowDagSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowDagSessionState, to: WorkflowDagSessionState): WorkflowDagSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowDagSession: " + from + " -> " + to);
    }
    return to;
  }
}
