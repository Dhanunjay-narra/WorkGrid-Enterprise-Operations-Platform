export type ProjectEpicsBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectEpicsBatchStateMachine {
  private allowedTransitions: Record<ProjectEpicsBatchState, ProjectEpicsBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectEpicsBatchState, to: ProjectEpicsBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectEpicsBatchState, to: ProjectEpicsBatchState): ProjectEpicsBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectEpicsBatch: " + from + " -> " + to);
    }
    return to;
  }
}
