export type WorkflowDagNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowDagNodeStateMachine {
  private allowedTransitions: Record<WorkflowDagNodeState, WorkflowDagNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowDagNodeState, to: WorkflowDagNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowDagNodeState, to: WorkflowDagNodeState): WorkflowDagNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowDagNode: " + from + " -> " + to);
    }
    return to;
  }
}
