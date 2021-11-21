import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { Button, Grid, GridColumn, List, Loader } from "semantic-ui-react";
import LoadingComponents from "../../../App/Layout/LoadingComponents";
import { Activity } from "../../../App/Models/activity";
import { PagingParams } from "../../../App/Models/pagination";
import { useStore } from "../../../App/stores/store";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityFilters from "./ActivityFilters";
import Activitylist from "./ActivityList";
import InfiniteScroll from "react-infinite-scroller";
import ActivityListItemPlaceholder from "./ActivityListItemPlaceholder";

export default observer(function ActivityDashboard() {
  const { activityStore } = useStore();
  const {
    selectedActivity,
    editMode,
    loadActivities,
    activityRegistry,
    pagination,
    setPagingParams,
  } = activityStore;

  const [loadingNext, setLoadingNext] = useState(false);

  function handleGetNext() {
    setLoadingNext(true);
    setPagingParams(new PagingParams(pagination!.currentPage + 1));
    loadActivities().then(() => setLoadingNext(false));
  }

  useEffect(() => {
    if (activityRegistry.size <= 1) loadActivities();
  }, [activityStore]);

  return (
    <Grid>
      <Grid.Column width="10">
        {activityStore.loadingInitial && !loadingNext ? (
          <>
            <ActivityListItemPlaceholder />
            <ActivityListItemPlaceholder />
          </>
        ) : (
          <InfiniteScroll
            pageStart={0}
            loadMore={handleGetNext}
            hasMore={
              !loadingNext &&
              !!pagination &&
              pagination.currentPage < pagination.totalPages
            }
            initialLoad={false}
          >
            <Activitylist />
          </InfiniteScroll>
        )}
      </Grid.Column>
      <Grid.Column width="6">
        <ActivityFilters />
      </Grid.Column>

      <Grid.Column width={10}>
        <Loader active={loadingNext} />
      </Grid.Column>
    </Grid>
  );
});
