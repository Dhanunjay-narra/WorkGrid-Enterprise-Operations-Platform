export type WorkflowDagTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowDagTaskStateMachine {
  private allowedTransitions: Record<WorkflowDagTaskState, WorkflowDagTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowDagTaskState, to: WorkflowDagTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowDagTaskState, to: WorkflowDagTaskState): WorkflowDagTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowDagTask: " + from + " -> " + to);
    }
    return to;
  }
}
