export type WorkflowDagProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowDagProfileStateMachine {
  private allowedTransitions: Record<WorkflowDagProfileState, WorkflowDagProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowDagProfileState, to: WorkflowDagProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowDagProfileState, to: WorkflowDagProfileState): WorkflowDagProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowDagProfile: " + from + " -> " + to);
    }
    return to;
  }
}
