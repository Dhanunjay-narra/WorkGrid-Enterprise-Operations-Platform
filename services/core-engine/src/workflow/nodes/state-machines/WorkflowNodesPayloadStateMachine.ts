export type WorkflowNodesPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowNodesPayloadStateMachine {
  private allowedTransitions: Record<WorkflowNodesPayloadState, WorkflowNodesPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowNodesPayloadState, to: WorkflowNodesPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowNodesPayloadState, to: WorkflowNodesPayloadState): WorkflowNodesPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowNodesPayload: " + from + " -> " + to);
    }
    return to;
  }
}
