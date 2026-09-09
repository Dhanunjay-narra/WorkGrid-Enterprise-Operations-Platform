export type WorkflowExecutionsConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowExecutionsConfigStateMachine {
  private allowedTransitions: Record<WorkflowExecutionsConfigState, WorkflowExecutionsConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowExecutionsConfigState, to: WorkflowExecutionsConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowExecutionsConfigState, to: WorkflowExecutionsConfigState): WorkflowExecutionsConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowExecutionsConfig: " + from + " -> " + to);
    }
    return to;
  }
}
