export type WorkflowDagConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowDagConfigStateMachine {
  private allowedTransitions: Record<WorkflowDagConfigState, WorkflowDagConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowDagConfigState, to: WorkflowDagConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowDagConfigState, to: WorkflowDagConfigState): WorkflowDagConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowDagConfig: " + from + " -> " + to);
    }
    return to;
  }
}
