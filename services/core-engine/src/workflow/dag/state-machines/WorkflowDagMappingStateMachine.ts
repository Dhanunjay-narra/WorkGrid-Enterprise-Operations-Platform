export type WorkflowDagMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowDagMappingStateMachine {
  private allowedTransitions: Record<WorkflowDagMappingState, WorkflowDagMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowDagMappingState, to: WorkflowDagMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowDagMappingState, to: WorkflowDagMappingState): WorkflowDagMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowDagMapping: " + from + " -> " + to);
    }
    return to;
  }
}
