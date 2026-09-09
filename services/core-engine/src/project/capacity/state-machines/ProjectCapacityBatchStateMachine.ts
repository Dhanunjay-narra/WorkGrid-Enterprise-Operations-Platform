export type ProjectCapacityBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectCapacityBatchStateMachine {
  private allowedTransitions: Record<ProjectCapacityBatchState, ProjectCapacityBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectCapacityBatchState, to: ProjectCapacityBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectCapacityBatchState, to: ProjectCapacityBatchState): ProjectCapacityBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectCapacityBatch: " + from + " -> " + to);
    }
    return to;
  }
}
