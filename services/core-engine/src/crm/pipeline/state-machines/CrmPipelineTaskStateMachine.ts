export type CrmPipelineTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmPipelineTaskStateMachine {
  private allowedTransitions: Record<CrmPipelineTaskState, CrmPipelineTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmPipelineTaskState, to: CrmPipelineTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmPipelineTaskState, to: CrmPipelineTaskState): CrmPipelineTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmPipelineTask: " + from + " -> " + to);
    }
    return to;
  }
}
